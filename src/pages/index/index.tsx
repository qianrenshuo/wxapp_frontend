import { Button, Image, Text, View } from '@tarojs/components'
import React, { useCallback } from 'react'
import { useEnv, useModal, useNavigationBar, useToast } from 'taro-hooks'

import './index.styl'

import logo from './hook.png'

const Index = () => {
  const env = useEnv()
  const [_title, { setTitle }] = useNavigationBar({ title: '前人说' })
  const [show] = useModal({
    title: 'Taro Hooks!',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
    mask: true
  })
  const [showToast] = useToast({ mask: true })

  const handleModal = useCallback(async () => {
    await show({ content: '不如给一个star⭐️!' }).then(async () => {
      await showToast({ title: '点击了支持!' })
    })
  }, [show, showToast])

  return (
    <View className="wrapper">
      <Image className="logo" src={logo} />
      <Text className="title">为Taro而设计的Hooks Library</Text>
      <Text className="desc">
        目前覆盖70%官方API. 抹平部分API在H5端短板. 提供近40+Hooks!
        并结合ahook适配Taro!
      </Text>
      <View className="list">
        <Text className="label">运行环境</Text>
        <Text className="note">{env}</Text>
      </View>
      <Button className="button" onClick={(async () => await setTitle('Taro Hooks Nice!')) as any}>
        设置标题
      </Button>
      <Button className="button" onClick={handleModal as any}>
        使用Modal
      </Button>
    </View>
  )
}

export default Index
