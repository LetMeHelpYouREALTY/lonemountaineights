import { NextResponse } from 'next/server';

const body = `# Lone Mountain Heights Real Estate — Dr. Jan Duffy

> Hyperlocal real estate expert for Lone Mountain Heights, Las Vegas NV 89129.
> Berkshire Hathaway HomeServices Nevada Properties. License S.0197614.LLC.

## Primary pages

- https://www.lonemountainheights.com/
- https://www.lonemountainheights.com/about
- https://www.lonemountainheights.com/contact
- https://www.lonemountainheights.com/homes
- https://www.lonemountainheights.com/valuation
- https://www.lonemountainheights.com/neighborhoods
- https://www.lonemountainheights.com/luxury
- https://www.lonemountainheights.com/market-report

## Service area

Lone Mountain Heights, Las Vegas, Nevada 89129 — Lone Mountain Ranch, Desert Vista Estates, northwest Las Vegas.

## Booking

Schedule via Calendly: https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation?utm_source=lonemountainheights.com&utm_medium=website&utm_content=llms.txt
`;

export function GET() {
  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}