// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          floating: {
            '0%': { transform: 'translate(0, 0px)' },
            '50%': { transform: 'translate(0, 10px)' },
            '100%': { transform: 'translate(0, 0)' },
          },
          typing: {
            from: { width: '0' },
            to: { width: '23ch' },
          },
          blink: {
            '50%': { borderColor: 'transparent' },
          },
        },
        animation: {
          floating: 'floating 3s ease-in-out infinite',
          typing: 'typing 4s steps(23) 1s infinite alternate',
          blink: 'blink 0.7s step-end infinite',
        },
      },
    },

    boxShadow: {
      'custom-purple': '2px 2px 0px #a855f7',
    },
  };
  