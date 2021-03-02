import RequireLibrary from '../src/lib/RequireLibrary'
import path from 'path'
jest.mock('ts-node', () => 'mock module')
jest.mock('tsconfig-paths', () => 'mocked module')

describe('RequireLibrary', () => {
    describe('require', function () {

        it('should try to require when ts-node module exists', function () {
            const svc = new RequireLibrary()
            expect(svc.require('ts-node')).toEqual('mock module')
        })

        it('should try to require when tsconfig-paths module exists', function () {
            const svc = new RequireLibrary()
            expect(svc.require('tsconfig-paths')).toEqual('mocked module')
        })

        it('should what to require', function () {
            const svc = new RequireLibrary()
            expect(() => svc.require('abcdef xyz')).toThrowError("Cannot find module 'abcdef xyz' from 'packages/wdio-config/src/lib/RequireLibrary.ts'")
        })
    })

    describe('resolve', function () {

        it('should try to resolve ts-node', function () {
            const svc = new RequireLibrary()
            expect(svc.resolve('ts-node')).toEqual(path.resolve(__dirname, '../../../node_modules/ts-node/dist/index.js'))
        })

        it('should try to resolve ts-node', function () {
            const svc = new RequireLibrary()
            expect(svc.resolve('tsconfig-paths')).toEqual(path.resolve(__dirname, '../../../node_modules/tsconfig-paths/lib/index.js'))
        })

        it('should try to resolve', function () {
            const svc = new RequireLibrary()
            expect(() => svc.resolve('abcdef xyz')).toThrowError("Cannot find module 'abcdef xyz' from 'packages/wdio-config/src/lib/RequireLibrary.ts'")
        })

    })

})
