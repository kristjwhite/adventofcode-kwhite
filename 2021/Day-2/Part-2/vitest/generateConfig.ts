import { CoverageIstanbulOptions, VitestEnvironment } from 'vitest'
import { defineConfig } from 'vitest/config'

export const config = {
  test: {
    globals: true,
    setupFiles: `${__dirname}/vitest.setup.js`,
    coverage: {
      all: true,
      provider: 'istanbul',
      enabled: true,
      include: ['**/src/**/*.ts'],
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    } as CoverageIstanbulOptions,
  },
}

type Config = {
  coverageReportPath: string
  environment?: VitestEnvironment
}

export const generateConfig = ({ coverageReportPath, environment = 'node' }: Config) =>
  defineConfig({ ...config, test: { environment, ...config.test, coverage: { ...config.test.coverage, reportsDirectory: `../../../coverage/${coverageReportPath}` } } })
