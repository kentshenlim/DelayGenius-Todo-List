import './icon';
import './style/style.css';
import './style/scrollbar.css';
import TaskCard from './js/components/TaskCard';

const contentCenter = document.getElementById('content-center');
const cardShelf = document.getElementById('card-shelf');
const p1 = TaskCard('What the fuck', [{ disp: 'An example task again', color: 'green' }]);
cardShelf.append(p1);
