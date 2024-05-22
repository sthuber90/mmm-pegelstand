describe.skip('node_helper', () => {
  let helper

  beforeEach(() => {
    helper = require('../node_helper')

    helper.setName('mmm-pegelstand')
  })

  it('start prints module name', () => {
    helper.start()

    expect(console.log).toHaveBeenCalledWith(
      'Starting module helper: mmm-pegelstand'
    )
  })
})
