function BatchStatus({ count }) {
  // if/else: determine base label
  let label;
  if (count === 0) {
    label = 'No Students Found';
  } else if (count <= 5) {
    label = 'Small Batch';
  } else {
    label = 'Large Batch';
  }

  // switch: determine a size category from the same count
  let category;
  switch (true) {
    case count === 0:
      category = 'none';
      break;
    case count <= 5:
      category = 'small';
      break;
    default:
      category = 'large';
  }

  // ternary: pick a css class based on category
  const badgeClass = category === 'none' ? 'batch-empty' : category === 'small' ? 'batch-small' : 'batch-large';

  return (
    <div className={`batch-status ${badgeClass}`}>
      <p>{label}</p>
    </div>
  );
}

export default BatchStatus;
