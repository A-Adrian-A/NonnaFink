
import React, { Component } from 'react';
import './Biografie.css';
import Bild from './img/Nonna3.jpg';
class Biografie extends Component {
  render() {
    return (
      <div className='fiftyfifty'>
        <div className="container-text">
          <h1 id='bio-title'>Biografie</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum magna diam augue purus at maecenas at arcu
            cursus. Porta sit ultricies orci, cras pellentesque ligula. Turpis nunc proin molestie egestas. In lectus
            pellentesque potenti nulla. Arcu semper lectus dictumst auctor dolor. Commodo condimentum hac ut ultrices augue
            quam enim a amet. Tellus tristique sit ut ornare sodales. Mollis amet, purus commodo eros massa nunc fringilla.
            Amet, nulla urna sit dapibus a. Molestie scelerisque eget in imperdiet sed gravida risus arcu. Nisl risus
            fringilla praesent non ac senectus volutpat pharetra. Ullamcorper donec nibh lorem lectus ultrices elit blandit
            eget. Tincidunt facilisis ultrices lacus, vitae. Tortor nisl sed lectus eros sollicitudin in feugiat id. A,
            vestibulum viverra vel velit augue turpis. Egestas at dolor odio rhoncus felis sapien turpis sit tellus.
            Senectus convallis integer nam elementum. Lorem felis, imperdiet non, amet quis dictumst lacus lacus. Venenatis,
            varius tincidunt blandit nullam purus. Amet, orci, duis scelerisque lacus. Fermentum ultrices ac massa, tellus.
            Maecenas leo maecenas suspendisse porta in lorem fringilla. Nec, arcu ut tristique fermentum lectus odio
            pellentesque. Lectus nibh lectus semper lectus blandit quis iaculis.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Rutrum magna diam augue purus at maecenas at arcu cursus. Porta sit ultricies orci, cras
            pellentesque ligula. Turpis nunc proin molestie egestas. In lectus pellentesque potenti nulla. Arcu semper
            lectus dictumst auctor dolor. Commodo condimentum hac ut ultrices augue quam enim a amet. Tellus tristique sit
            ut ornare sodales. Mollis amet, purus commodo eros massa nunc fringilla. Amet, nulla urna sit dapibus a.
            Molestie scelerisque eget in imperdiet sed gravida risus arcu. Nisl risus fringilla praesent non ac senectus
            volutpat pharetra. Ullamcorper donec nibh lorem lectus ultrices elit blandit eget. Tincidunt facilisis ultrices
            lacus, vitae. Tortor nisl sed lectus eros sollicitudin in feugiat id. A, vestibulum viverra vel velit augue
            turpis. Egestas at dolor odio rhoncus felis sapien turpis sit tellus. Senectus convallis integer nam elementum.
            Lorem felis, imperdiet non, amet quis dictumst lacus lacus. Venenatis, varius tincidunt blandit nullam purus.
            Amet, orci, duis scelerisque lacus. Fermentum ultrices ac massa, tellus. Maecenas leo maecenas suspendisse porta
            in lorem fringilla. Nec, arcu ut tristique fermentum lectus odio pellentesque. Lectus nibh lectus semper lectus
            blandit quis iaculis.</p>
        </div>
        <div className="container-image">
          <img id="bio-image" src={Bild} alt="Nonna"></img>
          <table>
            <tbody>
              <tr>
                <td>Grösse</td>
                <td>1.72 meter</td>
              </tr>
              <tr>
                <td>Haarfarbe</td>
                <td>Brünett</td>
              </tr>
              <tr>
                <td>Augenfarber</td>
                <td>Braun</td>
              </tr>
              <tr>
                <td>Konfektionsgrösse</td>
                <td>42</td>
              </tr>
              <tr>
                <td>Nationalität</td>
                <td>Deutsch Russisch</td>
              </tr>
              <tr>
                <td>Sprachen</td>
                <td>Deutsch Schwizerdütsch Russisch</td>
              </tr>
              <tr>
                <td>Schulbildung</td>
                <td>Bla</td>
              </tr>
              <tr>
                <td>Schauspielausbildung</td>
                <td>Bla</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Biografie;