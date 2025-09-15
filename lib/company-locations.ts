export type CompanyLocation = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
};

export const companyLocations: CompanyLocation[] = [
  {
    id: 'india-hyderabad-main',
    name: 'Hyderabad Main Office',
    address: 'H. No. 1-98/9/3/32T, Plot No. 50, 4th Floor, Sai Dham Building, Opposite S.R.K. House, Cyber Hills Colony, VIP Hills, Silicon Valley, Image Garden Road, Madhapur',
    city: 'Hyderabad',
    state: 'Telangana',
    zip: '500081',
    country: 'India',
  },
  {
    id: 'india-hyderabad-malakpet',
    name: 'Hyderabad Malakpet Office',
    address: '16-2-701/d/2, Palton, Dayanand Nagar, Malakpet',
    city: 'Hyderabad',
    state: 'Telangana',
    zip: '500036',
    country: 'India',
  },
  {
    id: 'dubai-business-centre',
    name: 'Dubai Business Centre',
    address: 'Business Centre, Al Hanaa Center - 2nd Floor - Al Jaffiliya',
    city: 'Dubai',
    state: '', // Dubai doesn't have states in the same way
    zip: '', // Dubai uses PO Boxes more commonly, or specific area codes
    country: 'UAE',
  },
  {
    id: 'usa-houston',
    name: 'Houston Office',
    address: '6250 West Park Dr Ste 319',
    city: 'Houston',
    state: 'TX',
    zip: '77057',
    country: 'USA',
  },
];

export const getCompanyLocation = (id: string) => {
  return companyLocations.find(location => location.id === id);
};
