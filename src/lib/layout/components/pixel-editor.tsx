'use client';

import { Box, Button, HStack, Input } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';

const GRID_SIZE = 32;
const PIXEL_SIZE = 16;
const SIZE = GRID_SIZE * PIXEL_SIZE;

type PixelEditorProps = {
  initialImage?: string;
};

export const PixelEditor = ({ initialImage }: PixelEditorProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // ✅ pixel state (fixes grid stacking issue)
  const pixelsRef = useRef<Map<string, string>>(new Map());

  const [color, setColor] = useState('#d8773f');
  const [isDrawing, setIsDrawing] = useState(false);
  const [mode, setMode] = useState<'draw' | 'erase'>('draw');

  const drawGrid = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(0,0,0,0.12)';

    for (let i = 0; i <= GRID_SIZE; i++) {
      const pos = i * PIXEL_SIZE;

      ctx.beginPath();
      ctx.moveTo(pos, 0);
      ctx.lineTo(pos, SIZE);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, pos);
      ctx.lineTo(SIZE, pos);
      ctx.stroke();
    }
  }, []);

  const redraw = useCallback(
    (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      // draw pixels
      pixelsRef.current.forEach((c, key) => {
        const [x, y] = key.split(',').map(Number);
        ctx.fillStyle = c;
        ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
      });

      drawGrid(ctx);
    },
    [drawGrid]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    canvas.width = SIZE;
    canvas.height = SIZE;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    pixelsRef.current.clear();

    if (!initialImage) {
      redraw(ctx);
      return;
    }

    const img = new window.Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) {
        return;
      }

      tempCanvas.width = GRID_SIZE;
      tempCanvas.height = GRID_SIZE;

      const scale = Math.min(GRID_SIZE / img.width, GRID_SIZE / img.height);

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      const offsetX = (GRID_SIZE - drawWidth) / 2;
      const offsetY = (GRID_SIZE - drawHeight) / 2;

      tempCtx.clearRect(0, 0, GRID_SIZE, GRID_SIZE);
      tempCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      const imageData = tempCtx.getImageData(0, 0, GRID_SIZE, GRID_SIZE);

      pixelsRef.current.clear();

      for (let y = 0; y < GRID_SIZE; y++) {
        for (let x = 0; x < GRID_SIZE; x++) {
          const index = (y * GRID_SIZE + x) * 4;
          const r = imageData.data[index];
          const g = imageData.data[index + 1];
          const b = imageData.data[index + 2];
          const a = imageData.data[index + 3];

          if (a > 0) {
            const key = `${x},${y}`;
            pixelsRef.current.set(key, `rgba(${r},${g},${b},${a / 255})`);
          }
        }
      }

      redraw(ctx);
    };

    img.src = initialImage;
  }, [initialImage, redraw]);

  const paint = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const scaleX = SIZE / rect.width;
    const scaleY = SIZE / rect.height;

    const x = Math.floor(((e.clientX - rect.left) * scaleX) / PIXEL_SIZE);
    const y = Math.floor(((e.clientY - rect.top) * scaleY) / PIXEL_SIZE);

    const key = `${x},${y}`;

    if (mode === 'draw') {
      pixelsRef.current.set(key, color);
    } else {
      pixelsRef.current.delete(key);
    }

    redraw(ctx);
  };

  const exportImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const url = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.download = 'pixel-sticker.png';
    link.href = url;
    link.click();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) {
      return;
    }

    pixelsRef.current.clear();
    redraw(ctx);
  };

  return (
    <Box textAlign="center" w="100%">
      <Box
        bg="bg.surface"
        border="1px solid"
        borderColor="bg.elevated"
        borderRadius="md"
        display="flex"
        justifyContent="center"
        overflow="hidden"
        w="100%"
      >
        <canvas
          onMouseDown={(e) => {
            setIsDrawing(true);
            paint(e);
          }}
          onMouseLeave={() => setIsDrawing(false)}
          onMouseMove={(e) => isDrawing && paint(e)}
          onMouseUp={() => setIsDrawing(false)}
          ref={canvasRef}
          style={{
            cursor: 'crosshair',
            imageRendering: 'pixelated',
            width: '100%',
            maxWidth: '600px',
            height: 'auto',
            aspectRatio: '1 / 1',
          }}
        />
      </Box>

      <HStack justify="center" mt="4" wrap="wrap">
        <Input
          border="none"
          onChange={(e) => setColor(e.target.value)}
          p="0"
          type="color"
          value={color}
          w="50px"
        />

        <Button
          bg={mode === 'draw' ? 'brand.primary' : 'bg.elevated'}
          color="white"
          onClick={() => setMode('draw')}
          size="sm"
        >
          Draw
        </Button>

        <Button
          bg={mode === 'erase' ? 'brand.primary' : 'bg.elevated'}
          color="white"
          onClick={() => setMode('erase')}
          size="sm"
        >
          Erase
        </Button>

        <Button onClick={clearCanvas} size="sm">
          Clear
        </Button>

        <Button onClick={exportImage} size="sm">
          Export
        </Button>
      </HStack>
    </Box>
  );
};
