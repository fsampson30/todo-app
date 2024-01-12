import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import FourthComponent from './FourthComponent';
import LearningJavaScript from './LearningJavaScript';

export default function App() {
    return (
      <div className="App">
        My todo application
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
        <FourthComponent />
        <LearningJavaScript />
      </div>
    );
  }