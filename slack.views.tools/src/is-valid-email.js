const regex = new RegExp('^[^\\.\\s@][^\\s@]*(?!\\.)@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*$')

export default s => regex.test(s)
