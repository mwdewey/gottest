import got from 'got';
import nock from 'nock';

it('test', async () => {
    nock('https://google.com')
        .get('/')
        .reply(200, [{test: 'test'}]);

    const response = await got
        .get('https://google.com/');

    console.log(response.body);
});
