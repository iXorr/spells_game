import fs from 'fs/promises'
import path from 'path'

export const DATA_FILE = (dataModuleName) => path.resolve(import.meta.dirname, `./../../data/${dataModuleName}.json`)

async function loadFile(filePath) {
  try {
    const receivedData = await fs.readFile(filePath, 'utf-8')

    if (receivedData)
      return JSON.parse(receivedData)
    else
      return []
  } catch (err) {
    console.error(`Ошибка загрузки ${filePath}: ` + err.message)
    return []
  }
}
  
export async function saveFile(filePath, dataModule) {
  try {
    await fs.writeFile(filePath, JSON.stringify(dataModule, null, 2))
  } catch (err) {
    console.error(`Ошибка сохранения ${filePath}: ` + err.message)
  }
}

async function createProxy(dataModuleName) {
  let dataFile = DATA_FILE(dataModuleName)
  let dataModule = await loadFile(dataFile)

  dataModule = new Proxy(dataModule, {
    get(target, property) {
      return target[property]
    },
  
    set(target, property, value) {
      target[property] = value
      saveFile(dataFile, dataModule)
      return true
    },
  
    apply(target, thisArg, argumentsList) {
      const result = target.apply(thisArg, argumentsList)
      saveFile(dataFile, dataModule)
      return result
    }
  })

  return dataModule
}

export const users = await createProxy('users')
export const ratings = await createProxy('ratings')