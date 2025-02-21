import fs from 'fs/promises'

async function loadFile(filePath) {
  try {
    const receivedData = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(receivedData)
  } catch (err) {
    console.error(`Ошибка загрузки ${filePath}: ` + err.message)
    return []
  }
}
  
async function saveFile(filePath, dataModule) {
  try {
    await fs.writeFile(filePath, JSON.stringify(dataModule, null, 2))
  } catch (err) {
    console.error(`Ошибка сохранения ${filePath}: ` + err.message)
  }
}

async function createProxy(dataModuleName) {
  let dataModule = await loadFile(`data/${dataModuleName}.json`)

  dataModule = new Proxy(dataModule, {
    get(target, property) {
      return target[property]
    },
  
    set(target, property, value) {
      target[property] = value
      saveFile(`data/${dataModuleName}.json`, dataModule)
      return true
    },
  
    apply(target, thisArg, argumentsList) {
      const result = target.apply(thisArg, argumentsList)
      saveFile(`data/${dataModuleName}.json`, dataModule)
      return result
    }
  })

  return dataModule
}
  
export const users = await createProxy('users')
export const ratings = await createProxy('ratings')