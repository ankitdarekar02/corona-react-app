import React from 'react';
import { Cards , Chart , CountryPicker} from './components';
import styles from './App.module.css'; 
import { fetchData} from './api';
import coronaImg from './images/image.png';


class App extends React.Component {


   state = {
       data:{},
       country:'',
   }

   componentDidMount() {
     this.receiveData();
   }

   handleCountryChange = (country) => {
     this.receiveData(country);
   }
   
   receiveData = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData,country: country})
   }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImg} alt="Covid-19"></img>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;


