import React, { useEffect, useState } from 'react';

import './AgregarJuego.scss';

export const AgregarJuego = () => {
  console.log('agregar');
  const [step, setStep] = useState(1);
  const [progresoWidth, setProgresoWidth] = useState({ width: '15%' });
  const [juego, setJuego] = useState({});
  const [stepT, setStepT] = useState(
    <div className="changing-step">
      <div className="mb-3">
        <label htmlFor="inputNombreJuego" className="form-label">
          Nombre del Juego
        </label>
        <input className="form-control" id="inputNombreJuego" />
      </div>
      <div className="input-group">
        <span className="input-group-text">Descripcion</span>
        <textarea className="form-control" aria-label="With textarea" />
      </div>
    </div>
  );

  const changeStep = (newStep) => {
    console.log(step);
    if (newStep === 1) {
      return (
        <div className="changing-step">
          <div className="mb-3">
            <label htmlFor="inputNombreJuego" className="form-label">
              Nombre del Juego
            </label>
            <input className="form-control" id="inputNombreJuego" />
          </div>
          <div className="input-group">
            <span className="input-group-text">Descripcion</span>
            <textarea className="form-control" aria-label="With textarea" />
          </div>
        </div>
      );
    }
    if (newStep === 2) {
      setProgresoWidth({ width: '30%' });
      return (
        <div className="changing-step">
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Plataforma
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Elige...</option>
              <option value="1">PLAYSTATION</option>
              <option value="2">PC</option>
              <option value="3">NINTENDO</option>
              <option value="4">XBOX</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Tipo
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Elige...</option>
              <option value="1">ACCION</option>
              <option value="2">ROL</option>
              <option value="3">ESTRATEGIA</option>
              <option value="4">AVENTURA Y CASUAL</option>
              <option value="4">SIMULACION</option>
              <option value="4">DEPORTES Y CARRERAS</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Categoria
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Elige...</option>
              <option value="1">Competitivo</option>
              <option value="2">Casual</option>
            </select>
          </div>
        </div>
      );
    }
    if (newStep === 3) {
      setProgresoWidth({ width: '45%' });
      return (
        <div className="changing-step">
          <label htmlFor="inputImagenJuego" className="form-label">
            Link de imagen de portada
          </label>
          <input className="form-control" id="inputImagenJuego" />
        </div>
      );
    }
    if (newStep === 4) {
      setProgresoWidth({ width: '60%' });
      return (
        <div className="changing-step">
          <h1 className="endScreen-steps">Has creado el juego con exito!</h1>
        </div>
      );
    }
  };
  const handleStepChange = () => {
    const updatedStep = step + 1;
    setStep(updatedStep);
    setStepT(changeStep(updatedStep));
  };

  useEffect(
    () => (e) => {
      console.log(e);
    },
    [step]
  );

  return (
    <div className="agregar-juego-section">
      <div className="titulo-agregar-juego">Agregar Juego</div>
      <div className="step-crear-juego">
        <form>
          {stepT}

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleStepChange}
          >
            Siguiente
          </button>
        </form>
      </div>
      <div className="completion-bar-name">Progreso:</div>
      <div className="progress-bar" style={progresoWidth} />
      <div className="progress-bar-back" />
    </div>
  );
};
