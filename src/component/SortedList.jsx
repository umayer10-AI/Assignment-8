"use client"
import React, { useContext } from 'react';
import {Label, ListBox, Select} from "@heroui/react";
import { Data } from '@/context/Context';

const SortedList = () => {

    const {setS} = useContext(Data)

    return (
        <div>
            <Select className="w-[256px]" placeholder="Select one">
      <Label>Sort by price</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item onClick={() => setS("default")} id="default" textValue="Default">
            Default
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item onClick={() => setS("low")} id="low" textValue="Low to High">
            Low to High
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item onClick={() => setS("high")} id="high" textValue="High to Low">
            High to Low
            <ListBox.ItemIndicator />
          </ListBox.Item>

        </ListBox>
      </Select.Popover>
    </Select>
        </div>
    );
};

export default SortedList;