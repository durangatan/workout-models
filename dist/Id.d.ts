export declare type Id<K, T> = T & {
    __TYPE__: K;
};
export declare type WithId<T> = {
    id: Id<T, number>;
};
