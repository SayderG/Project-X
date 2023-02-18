import './Screen.css'
import Header from '../components/Service/Header'
import Service from '../components/Service/Service';

export default function Home() {
  const service = {
    name: "Service Name",
    companies: [
      "Company 1",
      "Company 2",
      "Company 3",
      "Company 4",
    ],

  }
  return (
    <div className="screen">
      <Header/>
      <Service service={service}/>
    </div>
  );
}