function Display({ value }) {
  return (
    <form>
      <input type="text" value={value} readOnly />
    </form>
  );
}

export default Display;