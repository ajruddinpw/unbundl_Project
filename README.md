## Setup Instructions

npm install
npm run dev

Opens at http://localhost:5173

## API Used

DummyJSON — https://dummyjson.com/products?limit=4

Used for the Why Whistle section. Each product's title, description,
and thumbnail image is fetched from the API and rendered directly
into the feature cards with useEffect and useState managing
loading, error, and success states.

## Approach

I identified the Why Whistle section as the best fit for dynamic
data since it has 4 repeating cards with title, description, and
image — which maps directly to the DummyJSON products response.


The WhistleApart comparison table uses an expand/collapse
interaction (Task C) where clicking any row reveals a detail panel.
 
