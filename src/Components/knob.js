import React, { useEffect,useState } from 'react';
import { Donut ,White} from 'react-dial-knob'




    function KnobDemo ({setTemp}) {
        const [value, setValue] = React.useState(35)
        return <White
              diameter={200}
              min={0}
              max={55}
              step={1}
              value={value}
     
              theme={{
                activeNotchColor: 'red',
                activeTextColor:'red'
              }}
              style={{
                position: 'relative',
                margin: '20px auto',
                width: '200px'
              }}
              
              onValueChange={e=>{setValue(e)
              setTemp(e)
              }}
              onClick={e=>console.log('10')}
              ariaLabelledBy={'my-label'}
              spaceMaxFromZero={false}
          >
              <label id={'my-label'} style={{
                textAlign: 'center',
                width: '200px',
                display: 'block',
                padding: '10px 0'
              }}></label>
          </White>
      }

      export default KnobDemo

