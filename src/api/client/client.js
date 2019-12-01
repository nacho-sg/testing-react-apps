import axios from 'axios';

import { baseConfiguration } from './config';

const client = axios.create(baseConfiguration);

export default client;
