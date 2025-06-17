import { Component } from 'react';
// import Statistics from './Statistics';
// import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions';
// import Section from '../components/Section/Section';
// import Notification from '../components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  counPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  onLeaveFeedback = event => {
    const buttonName = event.target.name;
    this.setState(prev => ({ [buttonName]: prev[buttonName] + 1 }));
  };
  render() {
    // const total = this.countTotalFeedback();
    // const positivePercentage = this.counPositiveFeedbackPercentage();
    // const totalFeedback = this.countTotalFeedback();

    return <div>react</div>;
  }
}

export default App;
