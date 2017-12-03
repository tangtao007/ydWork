import cssIndex from '../styles/index.css';
class PraiseButton {
  constructor() {

  }
  clickAction() {
    axios.get('/update')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
export default PraiseButton;