import './Screen.css'
import Header from '../components/Service/Header'
import ServiceUnit from '../components/Service/ServiceUnit';
import { useDispatch } from "react-redux";
import { setScreen } from '../store/appStore'

export default function Home() {
  const dispatch = useDispatch()
  const service = {
    title: "Клининг",
    companies: [
      "Бабайка",
      "Экспресс",
      "Домашний",
      "Добрый",
    ]
  }
  return (
    <div className="screen">
      <Header text={"Услуга"} onClick={() => dispatch(setScreen(2))}/>
      <ServiceUnit
        service={service}
      />
    </div>
  );
}