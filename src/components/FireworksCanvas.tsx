import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
  gravity: number;
}

const FireworksCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const cameraYRef = useRef<number>(0);
  const targetCameraYRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ff6b6b', '#ff8e8e', '#ffb3b3', '#ffd1d1', '#ffe0e0', '#ffeaa7', '#fdcb6e', '#e17055'];

    // Create initial firework particles shooting upward
    const createFirework = (x: number, y: number) => {
      for (let i = 0; i < 8; i++) {
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 15 - 10,
          life: 100,
          maxLife: 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 3 + 2,
          gravity: 0.1
        });
      }
    };

    // Create heart-shaped explosion
    const createHeartExplosion = (x: number, y: number) => {
      const heartPoints = [];
      
      // Generate heart shape points
      for (let t = 0; t < Math.PI * 2; t += 0.1) {
        const heartX = 16 * Math.pow(Math.sin(t), 3);
        const heartY = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
        heartPoints.push({ x: heartX, y: -heartY });
      }

      // Create particles along heart shape
      heartPoints.forEach((point, index) => {
        if (index % 2 === 0) { // Reduce particle count
          const speed = Math.random() * 3 + 2;
          const angle = Math.atan2(point.y, point.x);
          
          particlesRef.current.push({
            x,
            y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 150,
            maxLife: 150,
            color: '#ff1744',
            size: Math.random() * 4 + 3,
            gravity: 0.05
          });
        }
      });

      // Add extra sparkle particles
      for (let i = 0; i < 30; i++) {
        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 50,
          y: y + (Math.random() - 0.5) * 50,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 100,
          maxLife: 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 2 + 1,
          gravity: 0.02
        });
      }
    };

    // Launch fireworks from the present box
    setTimeout(() => {
      const centerX = canvas.width / 2;
      const startY = canvas.height * 0.7;
      createFirework(centerX, startY);
      
      // Camera follows fireworks
      targetCameraYRef.current = -200;
    }, 100);

    // Create heart explosion after fireworks reach peak
    setTimeout(() => {
      const centerX = canvas.width / 2;
      const explosionY = canvas.height * 0.3;
      createHeartExplosion(centerX, explosionY);
    }, 2000);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth camera movement
      cameraYRef.current += (targetCameraYRef.current - cameraYRef.current) * 0.02;

      ctx.save();
      ctx.translate(0, cameraYRef.current);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.life--;

        if (particle.life <= 0) return false;

        // Draw particle
        const alpha = particle.life / particle.maxLife;
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        return true;
      });

      ctx.restore();
      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ background: 'transparent' }}
    />
  );
};

export default FireworksCanvas;