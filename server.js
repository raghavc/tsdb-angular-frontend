const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');

const app = express();
app.use(cors());

function generateMockData(table) {
  const data = [];

  for (let i = 0; i < 50; i++) {
    switch (table) {
      case 'CreditCurveTenor':
        data.push({
          cobdate: faker.date.past().toISOString(),
          bookid: faker.datatype.number({ min: 1000000000000000, max: 9999999999999999 }), // Simulating a bigint
          positionriskkey: faker.string.alphanumeric(10),
          starttenor: faker.string.alphanumeric(10),
          maturitytenor: faker.string.alphanumeric(10),
          segmentname: faker.string.alphanumeric(10),
          cs01rate: faker.datatype.float({ precision: 0.01 }),
          irdeltaoutright: faker.datatype.float({ precision: 0.01 }),
          ird: faker.datatype.float({ precision: 0.01 }),
        });
        break;
      case 'CreditScenarioMatrix':
        data.push({
          cobdate: faker.date.past().toISOString(),
          tradeid: faker.string.alphanumeric(10),
          spreadbumpsize: faker.datatype.number({ max: 100 }),
          volbumpsize: faker.datatype.number({ max: 100 }),
          spreadbumpstyle: faker.string.alphanumeric(10),
          volbumpstyle: faker.string.alphanumeric(10),
          spreadbumptype: faker.string.alphanumeric(10),
          volbumptype: faker.string.alphanumeric(10),
          configname: faker.string.alphanumeric(10),
          scenarioname: faker.string.alphanumeric(10),
          pnl: faker.datatype.float({ precision: 0.01 }),
          mtm: faker.datatype.float({ precision: 0.01 }),
        });
        break;
      case 'EquityNumeric':
        data.push({
          cobdate: faker.date.past().toISOString(),
          positionriskkey: faker.string.alphanumeric(10),
          metricid: faker.datatype.number(),
          stresstest: faker.string.alphanumeric(10),
          valueingbp: faker.datatype.float({ precision: 0.01 }),
          valueinusd: faker.datatype.float({ precision: 0.01 }),
        });
        break;
      case 'EquitySpotVol':
        data.push({
          cobdate: faker.date.past().toISOString(),
          positionriskkey: faker.string.alphanumeric(10),
          spotmove: faker.string.alphanumeric(10),
          volmove: faker.string.alphanumeric(10),
          metricid: faker.datatype.number(),
          stresstest: faker.string.alphanumeric(10),
          valueingbp: faker.datatype.float({ precision: 0.01 }),
          valueinusd: faker.datatype.float({ precision: 0.01 }),
        });
        break;
      case 'EquityTenor':
        data.push({
          cobdate: faker.date.past().toISOString(),
          positionriskkey: faker.string.alphanumeric(10),
          tenor: faker.string.alphanumeric(10),
          metricid: faker.datatype.number(),
          stresstest: faker.string.alphanumeric(10),
          valueingbp: faker.datatype.float({ precision: 0.01 }),
          valueinusd: faker.datatype.float({ precision: 0.01 }),
        });
        break;
      case 'Hierarchy':
        data.push({
          bookid: faker.datatype.number({ min: 1000000000000000, max: 9999999999999999 }), // Simulating a bigint
          cobdate: faker.date.past().toISOString(),
          region: faker.string.alphanumeric(10),
          chorusnodecode: faker.datatype.number(),
          namelevel1: faker.string.alphanumeric(10),
          namelevel2: faker.string.alphanumeric(10),
          // add more levels as needed
          legalentityname: faker.string.alphanumeric(10),
          addedby: faker.string.alphanumeric(10),
          name: faker.string.alphanumeric(10),
          accretement: faker.string.alphanumeric(10),
          description: faker.string.alphanumeric(10),
          bonustax: faker.string.alphanumeric(10),
          type: faker.string.alphanumeric(10),
        });
        break;
      case 'Instruments':
        data.push({
          instrumentid: faker.datatype.number({ min: 1000000000000000, max: 9999999999999999 }), // Simulating a bigint
          esmpid: faker.datatype.number(),
          isin: faker.string.alphanumeric(10),
          cusip: faker.string.alphanumeric(10),
          acsymbol: faker.string.alphanumeric(10),
          instrumentname: faker.string.alphanumeric(10),
          maturitydate: faker.date.future().toISOString(),
          savedon: faker.date.past().toISOString(),
          coupontype: faker.string.alphanumeric(10),
          instrumenttype: faker.string.alphanumeric(10),
          instrumentdescription: faker.string.alphanumeric(10),
          expirationdate: faker.date.future().toISOString(),
          coupontypedrate: faker.datatype.float({ precision: 0.01 }),
          ric: faker.string.alphanumeric(10),
          bbticker: faker.string.alphanumeric(10),
          currentbaseindex: faker.string.alphanumeric(10),
        });
        break;
      case 'Issuers':
        data.push({
          issuerid: faker.datatype.number({ min: 1000000000000000, max: 9999999999999999 }), // Simulating a bigint
          region: faker.string.alphanumeric(10),
          geographyofriskid: faker.datatype.number({ min: 1000000000000000, max: 9999999999999999 }), // Simulating a bigint
          rating_sp: faker.string.alphanumeric(10),
          rating_moody: faker.string.alphanumeric(10),
          creditrating: faker.string.alphanumeric(10),
          rating_fitch: faker.string.alphanumeric(10),
          name: faker.string.alphanumeric(10),
        });
        break;
      case 'PositionRiskModel':
        data.push({
          cobdate: faker.date.past().toISOString(),
          region: faker.string.alphanumeric(10),
          bookid: faker.datatype.number(),
          assettypeclass: faker.string.alphanumeric(10),
          tradedcounterpartyname: faker.string.alphanumeric(10),
          fundassetclassname: faker.string.alphanumeric(10),
          assettypelevel1: faker.string.alphanumeric(10),
          producttype0: faker.string.alphanumeric(10),
          instrumentid: faker.datatype.number({ min: 1000000000000000, max: 9999999999999999 }), // Simulating a bigint
        });
        break;
      default:
        break;
    }
  }
  return data;
}

app.get('/:table', (req, res) => {
  const table = req.params.table;
  const data = generateMockData(table);
  res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
