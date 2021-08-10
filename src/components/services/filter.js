import { stringInclues } from '../util/common';

export const FILTER_ALL = '全部';
export const FILTER_ACTIVE = '未完成';
export const FILTER_COMPLETED = '已完成';

export function getOptions() {
  return {
    [FILTER_ALL]: '全部',
    [FILTER_ACTIVE]: '未完成',
    [FILTER_COMPLETED]: '已完成'
  }
}

export function applyFilter(list, filter) {
  switch (filter) {
    case FILTER_COMPLETED:
      return list.filter(item => item.completed === true);

    case FILTER_ACTIVE:
      return list.filter(item => item.completed !== true);

    default:
      return list;
  }
}

export function search(list, query) {
  let q = query.trim().toLowerCase();

  return list.filter(({ text }) => stringInclues(text.toLowerCase(), q));
}