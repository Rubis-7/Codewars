let ìsZeroBalanced = n => { 
    if (n.length > 0 && n.every(index => n.includes(-index))) {
      return n.reduce(function(aggregator, value) {
        return aggregator + value;
      }) === 0;
    } else return false;
  }