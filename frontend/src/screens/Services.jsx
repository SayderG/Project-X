import './Screen.css'
import Services from '../components/Services/Services';
import Header from '../components/Service/Header';

export default function ServicesScreen() {
  return (
    <div className="screen">
      <Header text={"Услуги"} isMain={true}/>
      <Services/>
    </div>
  );
}