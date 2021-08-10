import update from 'immutability-helper';
/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
  return [
    {
      id: 1,
      text: 'react todo 总结',
      completed: false
    },
    {
      id: 2,
      text: '博客摸鱼',
      completed: false
    },
    {
      id: 3,
      text: '其他',
      completed: false
    }
  ]
}


/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
  return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
  let item = Object.assign({
    id: getNextId()
  }, data);

  return list.concat([item]);
}


export function updateStatus(items, itemId, completed) {
  console.log('completed--', completed);
  let index = getAll().findIndex(item => item.id === itemId);
  console.log('index--', index);
  return update(items, {
    [index]: {
      completed: { $set: completed }
    }
  })

}