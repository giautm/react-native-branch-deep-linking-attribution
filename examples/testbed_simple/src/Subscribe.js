import { BranchSubscriber } from 'react-native-branch'

console.info("Subscribing to Branch links")

const subscriber = new BranchSubscriber({
  checkCachedEvents: true,
  onOpenStart: ({ uri }) => {
    console.info('Branch opening ' + uri)
  },
  onOpenComplete: ({ error, params, uri }) => {
    if (error) {
      console.error("Error from Branch: " + error)
      return
    }

    console.info("Received link response from Branch")

    console.log("params: " + JSON.stringify(params))
  },
})

subscriber.subscribe()
