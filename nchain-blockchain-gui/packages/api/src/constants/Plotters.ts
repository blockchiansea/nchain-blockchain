import { PlotterOptions, PlotterDefaults } from '../@types/Plotter';

import PlotterName from './PlotterName';

export const bladebitRamOptions: PlotterOptions = {
  kSizes: [32],
  haveNumBuckets: false,
  haveTempDir: false,
  haveMadmaxNumBucketsPhase3: false,
  haveMadmaxThreadMultiplier: false,
  haveMadmaxTempToggle: false,
  haveBladebitWarmStart: true,
  haveBladebitDisableNUMA: true,
  haveBladebitNoCpuAffinity: true,
  haveBladebitCompressionLevel: true,
  haveBladebitDiskCache: false,
  haveBladebitDiskF1Threads: false,
  haveBladebitDiskFpThreads: false,
  haveBladebitDiskCThreads: false,
  haveBladebitDiskP2Threads: false,
  haveBladebitDiskP3Threads: false,
  haveBladebitDiskAlternate: false,
  haveBladebitDiskNoT1Direct: false,
  haveBladebitDiskNoT2Direct: false,
  haveBladebitDeviceIndex: false,
  haveBladebitDisk128Mode: false,
  haveBladebitDisk16Mode: false,
  canDisableBitfieldPlotting: false,
  canPlotInParallel: false,
  canDelayParallelPlots: false,
  canSetBufferSize: false,
};

export const bladebitRamDefaults: PlotterDefaults = {
  plotterName: PlotterName.BLADEBIT_RAM,
  plotType: 'ramplot',
  plotSize: 32,
  numThreads: 0,
  numBuckets: undefined,
  madmaxNumBucketsPhase3: undefined,
  madmaxThreadMultiplier: undefined,
  madmaxWaitForCopy: undefined,
  madmaxTempToggle: undefined,
  bladebitWarmStart: false,
  bladebitDisableNUMA: false,
  bladebitNoCpuAffinity: false,
  bladebitCompressionLevel: 0,
  bladebitDiskCache: undefined,
  bladebitDiskF1Threads: undefined,
  bladebitDiskFpThreads: undefined,
  bladebitDiskCThreads: undefined,
  bladebitDiskP2Threads: undefined,
  bladebitDiskP3Threads: undefined,
  bladebitDiskAlternate: undefined,
  bladebitDiskNoT1Direct: undefined,
  bladebitDiskNoT2Direct: undefined,
  bladebitDeviceIndex: undefined,
  bladebitEnableDisk128Mode: undefined,
  bladebitEnableDisk16Mode: undefined,
  disableBitfieldPlotting: undefined,
  parallel: false,
  delay: 0,
};

export const bladebitDiskOptions: PlotterOptions = {
  kSizes: [32],
  haveNumBuckets: true,
  haveMadmaxNumBucketsPhase3: false,
  haveMadmaxThreadMultiplier: false,
  haveMadmaxTempToggle: false,
  haveBladebitWarmStart: true,
  haveBladebitNoCpuAffinity: true,
  haveBladebitDisableNUMA: true,
  haveTempDir: true,
  haveBladebitCompressionLevel: true,
  haveBladebitDiskCache: true,
  haveBladebitDiskF1Threads: true,
  haveBladebitDiskFpThreads: true,
  haveBladebitDiskCThreads: true,
  haveBladebitDiskP2Threads: true,
  haveBladebitDiskP3Threads: true,
  haveBladebitDiskAlternate: true,
  haveBladebitDiskNoT1Direct: true,
  haveBladebitDiskNoT2Direct: true,
  haveBladebitDeviceIndex: false,
  haveBladebitDisk128Mode: false,
  haveBladebitDisk16Mode: false,
  canDisableBitfieldPlotting: false,
  canPlotInParallel: false,
  canDelayParallelPlots: false,
  canSetBufferSize: false,
};

export const bladebitDiskDefaults: PlotterDefaults = {
  plotterName: PlotterName.BLADEBIT_DISK,
  plotType: 'diskplot',
  plotSize: 32,
  numThreads: 0,
  numBuckets: 256,
  madmaxNumBucketsPhase3: undefined,
  madmaxThreadMultiplier: undefined,
  madmaxWaitForCopy: undefined,
  madmaxTempToggle: undefined,
  bladebitWarmStart: false,
  bladebitDisableNUMA: false,
  bladebitNoCpuAffinity: false,
  bladebitCompressionLevel: 0,
  bladebitDiskCache: undefined,
  bladebitDiskF1Threads: undefined,
  bladebitDiskFpThreads: undefined,
  bladebitDiskCThreads: undefined,
  bladebitDiskP2Threads: undefined,
  bladebitDiskP3Threads: undefined,
  bladebitDiskAlternate: undefined,
  bladebitDiskNoT1Direct: undefined,
  bladebitDiskNoT2Direct: undefined,
  bladebitDeviceIndex: undefined,
  bladebitEnableDisk128Mode: undefined,
  bladebitEnableDisk16Mode: undefined,
  disableBitfieldPlotting: undefined,
  parallel: false,
  delay: 0,
};

export const bladebitCudaOptions: PlotterOptions = {
  kSizes: [32],
  haveNumBuckets: false,
  haveMadmaxNumBucketsPhase3: false,
  haveMadmaxThreadMultiplier: false,
  haveMadmaxTempToggle: false,
  haveBladebitWarmStart: true,
  haveBladebitDisableNUMA: true,
  haveBladebitNoCpuAffinity: true,
  haveTempDir: false,
  haveBladebitCompressionLevel: true,
  haveBladebitDiskCache: false,
  haveBladebitDiskF1Threads: false,
  haveBladebitDiskFpThreads: false,
  haveBladebitDiskCThreads: false,
  haveBladebitDiskP2Threads: false,
  haveBladebitDiskP3Threads: false,
  haveBladebitDiskAlternate: false,
  haveBladebitDiskNoT1Direct: false,
  haveBladebitDiskNoT2Direct: false,
  haveBladebitDeviceIndex: true,
  haveBladebitDisk128Mode: true,
  haveBladebitDisk16Mode: true,
  canDisableBitfieldPlotting: false,
  canPlotInParallel: false,
  canDelayParallelPlots: false,
  canSetBufferSize: false,
};

export const bladebitCudaDefaults: PlotterDefaults = {
  plotterName: PlotterName.BLADEBIT_CUDA,
  plotType: 'cudaplot',
  plotSize: 32,
  numThreads: 0,
  numBuckets: undefined,
  madmaxNumBucketsPhase3: undefined,
  madmaxThreadMultiplier: undefined,
  madmaxWaitForCopy: undefined,
  madmaxTempToggle: undefined,
  bladebitWarmStart: false,
  bladebitDisableNUMA: false,
  bladebitNoCpuAffinity: false,
  bladebitCompressionLevel: 1,
  bladebitDiskCache: undefined,
  bladebitDiskF1Threads: undefined,
  bladebitDiskFpThreads: undefined,
  bladebitDiskCThreads: undefined,
  bladebitDiskP2Threads: undefined,
  bladebitDiskP3Threads: undefined,
  bladebitDiskAlternate: undefined,
  bladebitDiskNoT1Direct: undefined,
  bladebitDiskNoT2Direct: undefined,
  bladebitDeviceIndex: 0,
  bladebitEnableDisk128Mode: false,
  bladebitEnableDisk16Mode: false,
  disableBitfieldPlotting: undefined,
  parallel: false,
  delay: 0,
};

export const chiaposOptions: PlotterOptions = {
  kSizes: [25, 32, 33, 34, 35],
  haveNumBuckets: true,
  haveMadmaxNumBucketsPhase3: false,
  haveMadmaxThreadMultiplier: false,
  haveMadmaxTempToggle: false,
  haveBladebitWarmStart: false,
  haveBladebitDisableNUMA: false,
  haveBladebitNoCpuAffinity: false,
  haveTempDir: true,
  haveBladebitDeviceIndex: false,
  haveBladebitDiskCache: false,
  haveBladebitDiskF1Threads: false,
  haveBladebitDiskFpThreads: false,
  haveBladebitDiskCThreads: false,
  haveBladebitDiskP2Threads: false,
  haveBladebitDiskP3Threads: false,
  haveBladebitDiskAlternate: false,
  haveBladebitDiskNoT1Direct: false,
  haveBladebitDiskNoT2Direct: false,
  haveBladebitCompressionLevel: false,
  haveBladebitDisk128Mode: false,
  haveBladebitDisk16Mode: false,
  canDisableBitfieldPlotting: true,
  canPlotInParallel: true,
  canDelayParallelPlots: true,
  canSetBufferSize: true,
};

export const chiaposDefaults: PlotterDefaults = {
  plotterName: PlotterName.CHIAPOS,
  plotSize: 32,
  numThreads: 2,
  numBuckets: 128,
  madmaxNumBucketsPhase3: undefined,
  madmaxThreadMultiplier: undefined,
  madmaxWaitForCopy: undefined,
  madmaxTempToggle: undefined,
  bladebitWarmStart: undefined,
  bladebitDisableNUMA: undefined,
  bladebitNoCpuAffinity: undefined,
  bladebitCompressionLevel: undefined,
  bladebitDiskCache: undefined,
  bladebitDiskF1Threads: undefined,
  bladebitDiskFpThreads: undefined,
  bladebitDiskCThreads: undefined,
  bladebitDiskP2Threads: undefined,
  bladebitDiskP3Threads: undefined,
  bladebitDiskAlternate: undefined,
  bladebitDiskNoT1Direct: undefined,
  bladebitDiskNoT2Direct: undefined,
  bladebitDeviceIndex: undefined,
  bladebitEnableDisk128Mode: undefined,
  bladebitEnableDisk16Mode: undefined,
  disableBitfieldPlotting: false,
  parallel: false,
  delay: 0,
};

export const madmaxOptions: PlotterOptions = {
  kSizes: [25, 32, 33, 34],
  haveNumBuckets: true,
  haveMadmaxNumBucketsPhase3: true,
  haveMadmaxThreadMultiplier: true,
  haveMadmaxTempToggle: true,
  haveBladebitWarmStart: false,
  haveBladebitDisableNUMA: false,
  haveBladebitNoCpuAffinity: false,
  haveTempDir: true,
  haveBladebitCompressionLevel: false,
  haveBladebitDiskCache: false,
  haveBladebitDiskF1Threads: false,
  haveBladebitDiskFpThreads: false,
  haveBladebitDiskCThreads: false,
  haveBladebitDiskP2Threads: false,
  haveBladebitDiskP3Threads: false,
  haveBladebitDiskAlternate: false,
  haveBladebitDiskNoT1Direct: false,
  haveBladebitDiskNoT2Direct: false,
  haveBladebitDeviceIndex: false,
  haveBladebitDisk128Mode: false,
  haveBladebitDisk16Mode: false,
  canDisableBitfieldPlotting: false,
  canPlotInParallel: false,
  canDelayParallelPlots: false,
  canSetBufferSize: false,
};

export const madmaxDefaults: PlotterDefaults = {
  plotterName: PlotterName.MADMAX,
  plotSize: 32,
  numThreads: 4,
  numBuckets: 256,
  madmaxNumBucketsPhase3: 256,
  madmaxThreadMultiplier: 1,
  madmaxWaitForCopy: true,
  madmaxTempToggle: false,
  bladebitWarmStart: undefined,
  bladebitDisableNUMA: undefined,
  bladebitNoCpuAffinity: undefined,
  bladebitCompressionLevel: undefined,
  bladebitDiskCache: undefined,
  bladebitDiskF1Threads: undefined,
  bladebitDiskFpThreads: undefined,
  bladebitDiskCThreads: undefined,
  bladebitDiskP2Threads: undefined,
  bladebitDiskP3Threads: undefined,
  bladebitDiskAlternate: undefined,
  bladebitDiskNoT1Direct: undefined,
  bladebitDiskNoT2Direct: undefined,
  bladebitDeviceIndex: undefined,
  bladebitEnableDisk128Mode: undefined,
  bladebitEnableDisk16Mode: undefined,
  disableBitfieldPlotting: undefined,
  parallel: false,
  delay: 0,
};
