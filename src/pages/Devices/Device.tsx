import React from "react";
import { useLoaderData } from "react-router-dom";
import { DeviceTapeTemplate } from "./DeviceTapeTemplate";
import Button from "../../components/Button";
import IDevice from "../../interfaces/device";
import "./device.scss";

enum deivceStatus {
  "Отключен",
  "Активен"
}

enum deviceClassStatus {
  "disabled",
  "active"
}

export const Device : React.FC = () => {
  const [mode, setMode] = React.useState("staticLight");
  const data = useLoaderData() as IDevice;

  const handleUpdateMode : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setMode(e.currentTarget.value);
  }

  return (
    <div className="device__container">
      <div className="device__top">
        <section className="device__title__wrapper">
          <h2 className="device__title__device__name">{data.name}</h2>
          <div className="device__title__description">
            <span className="device__title__description__mac">MAC: 
              <span className="device__title__description__mac-name">{data.mac}</span>
            </span>
            <span className="device__title__description__status">Статус: 
              <span className={`device__title__description__status-name ${deviceClassStatus[data.active]}`}>{deivceStatus[data.active]}</span>
            </span>
          </div>
        </section>
        <DeviceTapeTemplate ledCount={data.ledCount} mode={mode} deviceId={data.id} />
      </div>
      <section className="modes">
        <h2 className="modes__title">Режимы</h2>
        <div className="modes__wrapper">
          <Button onClickBtn={handleUpdateMode} value={"fadedRow"} active={mode === "fadedRow"} className="modes" textBtn="Переливание цвета[2]"/>
          <Button onClickBtn={handleUpdateMode} value={"rainbowColor"} active={mode === "rainbowColor"} className="modes" textBtn="Переливание цвета"/>
          <Button onClickBtn={handleUpdateMode} value={"staticLight"} active={mode === "staticLight"} className="modes" textBtn="Статический цвет"/>
          <Button onClickBtn={handleUpdateMode} value={"fading"} active={mode === "fading"} className="modes" textBtn="Затухание"/>
          <Button onClickBtn={handleUpdateMode} value={"impulse"} active={mode === "impulse"} className="modes" textBtn="Импульс"/>
        </div>
      </section>
    </div>
  );
}