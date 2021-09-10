export interface RequestProps {
  request: any;
}
class Http {
  request() {
    console.log("request");
    return "";
  }
}

export default Http;
