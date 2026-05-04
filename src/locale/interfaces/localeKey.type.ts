import en from '@/locale/en';

type Primitive = string | number | boolean | null | undefined | symbol | bigint;

type PrevDepth = [never, 0, 1, 2, 3, 4, 5, 6];

type NestedKeyOf<T, Depth extends number = 6> = [Depth] extends [never]
  ? never
  : T extends Primitive
  ? never
  : {
      [K in Extract<keyof T, string>]: T[K] extends Primitive
        ? K
        : K | `${K}.${NestedKeyOf<T[K], PrevDepth[Depth]>}`;
    }[Extract<keyof T, string>];

export type LocaleKey = NestedKeyOf<typeof en>;
