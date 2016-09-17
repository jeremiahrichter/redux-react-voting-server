import {
    List
} from 'immutable';

export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}

export function next(state) {
    var entries = state.get('entries');
    return state.merge({
        vote: Map({
            pair: entries.take(2)
        }),
        entries: entries.skip(2)
    });
}
