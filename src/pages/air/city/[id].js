import React from 'react';

import { useRouter } from 'next/router';

function City() {
  const router = useRouter();
  return <div>Example city: {router.query.id}</div>;
}

export default City;
