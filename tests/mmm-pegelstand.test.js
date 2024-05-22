describe('mmm-pegelstand', () => {
  beforeAll(() => {
    require('../__mocks__/Logger')
    require('../__mocks__/Module')
  })

  const name = 'mmm-pegelstand'

  let MMMPeglstand

  beforeEach(() => {
    jest.resetModules()
    require('../mmm-pegelstand')

    MMMPeglstand = global.Module.create(name)
    MMMPeglstand.setData({ name, identifier: `Module_1_${name}` })
  })

  it('should have correct defaults', () => {
    expect(MMMPeglstand.defaults).toMatchSnapshot()
  })

  it('should start', () => {
    MMMPeglstand.start()
    expect(global.Log.log).toHaveBeenNthCalledWith(
      1,
      'Starting module: mmm-pegelstand'
    )
  })

  it('should get styles', () => {
    expect(MMMPeglstand.getStyles()).toEqual([])
  })

  it('should get scripts', () => {
    expect(MMMPeglstand.getScripts()).toEqual([])
  })

  it('should get DOM', () => {
    expect(MMMPeglstand.getDom()).toMatchSnapshot()
  })
})
