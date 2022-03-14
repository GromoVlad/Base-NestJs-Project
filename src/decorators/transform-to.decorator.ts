import { Transform } from 'class-transformer';

export function TransformTo(valueObject: any, allowNull = false, nullValues: any[] = []): PropertyDecorator {
  return Transform(
    ({ value }) => {
      if (allowNull && (value === null || nullValues.includes(value))) {
        return null;
      }
      if (Array.isArray(value)) {
        return value.map((x) => new valueObject(x));
      }
      return new valueObject(value);
    },
    { toClassOnly: true },
  );
}
