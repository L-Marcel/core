type Not<Value, Reserved> = (Value extends Reserved
  ? never
  : Value) &
  (Reserved extends Value ? never : Value);
