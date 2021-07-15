import run from './app/app';
import AlertService from './app/alert.service';
import ComponentService from './app/component.service';
import './main.scss'

const as = new AlertService();
const cs = new ComponentService();

run(as, cs);