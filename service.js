export class ExternalAPI {
  constructor() {}

  callPAI() {
    console.log('External API Calling');
    fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
}
