import styled, { keyframes } from "styled-components";

// Animações
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const goldShimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const sparkle = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.3);
  }
`;

// Container principal
export const Conteiner = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #1a1a2e 0%,
    #16213e 25%,
    #0f3460 50%,
    #533483 75%,
    #e94560 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(255, 215, 0, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 215, 0, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(255, 215, 0, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="0.5" fill="%23FFD700" opacity="0.3"/><circle cx="10" cy="10" r="0.3" fill="%23FFD700" opacity="0.2"/><circle cx="40" cy="15" r="0.4" fill="%23FFD700" opacity="0.25"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
    opacity: 0.4;
    pointer-events: none;
    animation: ${float} 6s ease-in-out infinite;
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    25% {
      background-position: 100% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

// Título principal
export const Title_One = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3),
    0 0 30px rgba(255, 215, 0, 0.2), 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: ${fadeInUp} 1s ease-out;
  background: linear-gradient(
    45deg,
    #ffd700,
    #ffa500,
    #ffd700,
    #ff8c00,
    #ffd700
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeInUp} 1s ease-out, ${goldShimmer} 4s ease-in-out infinite;
  position: relative;
  z-index: 10;

  &::before {
    content: "✨";
    position: absolute;
    top: -20px;
    left: -30px;
    font-size: 2rem;
    animation: ${sparkle} 2s ease-in-out infinite;
  }

  &::after {
    content: "✨";
    position: absolute;
    top: -20px;
    right: -30px;
    font-size: 2rem;
    animation: ${sparkle} 2s ease-in-out infinite 1s;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;

    &::before,
    &::after {
      font-size: 1.5rem;
      top: -15px;
    }

    &::before {
      left: -20px;
    }

    &::after {
      right: -20px;
    }
  }
`;

// Container do input
export const SingleInput = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 248, 220, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  padding: 1.5rem;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 215, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 215, 0, 0.1);
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  position: relative;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      #ffd700,
      #ffa500,
      #ffd700,
      #ff8c00,
      #ffd700
    );
    border-radius: 25px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input {
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.2rem;
    width: 100%;
    margin-right: 1rem;
    color: #333;
    font-weight: 600;

    &::placeholder {
      color: #b8860b;
      font-weight: 500;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 1.5rem 0;
    border-radius: 20px;

    input {
      font-size: 1rem;
    }
  }
`;

// Botão de busca
export const ButtonOne = styled.button`
  background: linear-gradient(135deg, #ffd700 0%, #ffa500 50%, #ff8c00 100%);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #1a1a2e;
  width: 55px;
  height: 55px;
  border-radius: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4),
    0 0 0 2px rgba(255, 215, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: scale(1.15) rotate(5deg);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.6),
      0 0 0 3px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5);
    animation: ${pulse} 0.6s ease-in-out;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: scale(1.05) rotate(2deg);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    animation: none;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    border-radius: 15px;
  }
`;

// Container dos resultados
export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.95) 0%,
    rgba(255, 248, 220, 0.95) 100%
  );
  backdrop-filter: blur(20px);
  width: 100%;
  max-width: 500px;
  border-radius: 25px;
  padding: 2rem;
  margin-top: 1rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(255, 215, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 215, 0, 0.1);
  animation: ${fadeInUp} 0.6s ease-out;
  position: relative;
  overflow: hidden;
  z-index: 10;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(
      90deg,
      #ffd700,
      #ffa500,
      #ff8c00,
      #ffa500,
      #ffd700
    );
    background-size: 300% 100%;
    animation: ${goldShimmer} 3s ease-in-out infinite;
  }

  &::after {
    content: "✨";
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.5rem;
    animation: ${sparkle} 3s ease-in-out infinite;
  }

  h2 {
    margin: 0 0 1.5rem 0;
    font-size: 2rem;
    color: #1a1a2e;
    font-weight: 800;
    text-align: center;
    background: linear-gradient(135deg, #ffd700, #ffa500, #ff8c00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 2px 10px rgba(255, 215, 0, 0.3);
    position: relative;
    grid-column: 1;
    justify-self: center;

    &::before {
      content: "🏆";
      position: absolute;
      left: -40px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.5rem;
      animation: ${rotate} 4s linear infinite;
    }

    &::after {
      content: "🏆";
      position: absolute;
      right: -40px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.5rem;
      animation: ${rotate} 4s linear infinite reverse;
    }
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-align: left;
    color: #2c2c2c;
    line-height: 1.6;
    font-weight: 600;
    padding: 0.8rem 1.2rem;
    background: rgba(255, 215, 0, 0.1);
    border-radius: 12px;
    border-left: 4px solid #ffd700;
    transition: all 0.3s ease;
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 50px;

    &:hover {
      background: rgba(255, 215, 0, 0.15);
      transform: translateX(5px);
    }

    b {
      color: #1a1a2e;
      font-weight: 800;
      background: linear-gradient(45deg, #ffd700, #ffa500);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-right: 8px;
      min-width: fit-content;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 20px;

    h2 {
      font-size: 1.5rem;

      &::before,
      &::after {
        font-size: 1.2rem;
        left: -30px;
        right: -30px;
      }
    }

    p {
      font-size: 1rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;

// Componente de loading (opcional)
export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 215, 0, 0.2);
  border-top: 4px solid #ffd700;
  border-right: 4px solid #ffa500;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 1rem auto;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    background: linear-gradient(45deg, #ffd700, #ffa500);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${pulse} 1s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// Mensagem de erro
export const ErrorMessage = styled.div`
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  margin: 1rem 0;
  text-align: center;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4),
    0 0 0 2px rgba(255, 107, 107, 0.2);
  animation: ${fadeInUp} 0.5s ease-out;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.2rem;
    animation: ${pulse} 1s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${shimmer} 2s ease-in-out infinite;
  }
`;
