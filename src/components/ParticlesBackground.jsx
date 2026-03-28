import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = ({ theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const isLight = theme === 'light';
  
  // Premium network/glow options
  const options = {
    fullScreen: { enable: false },
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 3 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
      particles: {
      color: { value: isLight ? ["#8b5cf6", "#ec4899"] : ["#0ea5e9", "#d946ef", "#ec4899"] },
      links: {
        color: isLight ? "#a78bfa" : "#0ea5e9",
        distance: 120,
        enable: true,
        opacity: isLight ? 0.2 : 0.15,
        width: 1,
        // Triangles are incredibly expensive on GPU, disable for performance
        triangles: {
            enable: false,
        }
      },
      collisions: { enable: false },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: true,
        speed: 1.5,
        straight: false,
      },
      number: {
        density: { enable: true, area: 1000 },
        value: 50, // Reduced from 120 for massive performance gain
      },
      opacity: {
        value: 0.4,
        animation: { enable: false } // Disabled for performance
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 2 },
        animation: { enable: false } // Disabled for performance
      },
      shadow: {
        enable: false, // Shadows on moving particles absolutely shreds GPU performance
      }
    },
    detectRetina: true,
  };

  return init ? (
    <Particles
      id="tsparticles"
      options={options}
      className={`fixed inset-0 pointer-events-auto transition-opacity duration-1000 ${isLight ? 'opacity-50' : 'opacity-80 mix-blend-screen'} -z-20`}
    />
  ) : null;
};

export default ParticlesBackground;
