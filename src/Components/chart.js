import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import  './override.js'

class Chart extends Component {
    constructor() {
        super();
        this.state = {


        }
    }
    componentWillMount() {


    }


    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#F58C30',
                    
                    borderWidth: 1,
                    width:10,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        return (
            <div>

                <h4 style={{ marginBottom: 0 , justifyContent:'space-between'}} className="regular white padding-sides-20 flex">Weekly Temperature
                <select style={{border:'1px solid', fontSize:'16px', borderRadius:'8px', padding:"2px", paddingLeft:'12px', paddingRight:'12px' ,height:'30px'}} >
                    <option >Today</option>
                    <option >24 Hours</option>
                    <option >Weekly</option>
                    <option >Monthly</option>

                   
                </select>
                </h4>
              
                <Bar
                   
                    data={data}

                    width={100}
                    height={70}
                    borderWidth={1}
                    options={{
                        cornerRadius: 8,
                        scales: {
                            xAxes: [{
                                barPercentage: 0.6,
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }],
                            yAxes: [{
                                barPercentage: 0.4,
                                
                                gridLines: {
                                    drawOnChartArea: false
                                }
                            }]
                        }
                     }}
                />

            </div>
        )
    }

}

export default Chart;