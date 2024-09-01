export const TODO = 'todo';
export const INPROGRESS = 'in-progress';
export const INREVIEW = 'in-review';
export const TESTING = 'testing';
export const DONE = 'done';

export const STATUS = {
    [TODO] : 'Todo',
    [INPROGRESS] : 'InProgress',
    [INREVIEW] : 'InReview',
    [TESTING] : 'Testing',
    [DONE] : 'Done',
};

export const STATUS_COLORS_CLASS = {
    [TODO] : 'bg-slate-400',
    [INPROGRESS] : 'bg-indigo-400',
    [INREVIEW] : 'bg-sky-400',
    [TESTING] : 'bg-orange-400',
    [DONE] : 'bg-green-400',
}