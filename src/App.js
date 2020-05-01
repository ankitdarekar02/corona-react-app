import React from 'react';
import { Cards , Chart , CountryPicker} from './components';
import styles from './App.module.css'; 
import { fetchData} from './api';
import coronaImg from './images/image.png';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
    typography: {
      fontFamily: "archia",
    }
  });

class App extends React.Component {

   state = {
       data:{},
       country:'',
   }

   async componentDidMount() {
     this.receiveData();
    }

   handleCountryChange = async (country) => {
     this.receiveData(country);
   }
   
   receiveData = async (country) => {
    const data = await fetchData(country);
    this.setState({data, country: country})
   }

    render() {
        const { data, country } = this.state;
        return (
            <ThemeProvider theme={theme}>
            <div className={styles.container}>
                <img className={styles.image} src={coronaImg} alt="Covid-19"></img>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
            <div className={styles.btmText}>developed by Ankit Darekar</div>
            </ThemeProvider>
        )
    }
}

export default App;



