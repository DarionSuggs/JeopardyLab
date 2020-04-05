//import the axios HTTP client to communicate with the API
import axios from 'axios';

class JeopardyService {

    constructor(url = 'https://jservice.kenzie.academy/api/random-clue', client = axios.create()){
        this.url = url;
        this.client = client;
    }

    getQuestion(){
        return this.client.get(this.url);
    }

}

export default JeopardyService;