"use client";
import { authClient } from "@/lib/auth-client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import React from 'react';
import { BiEdit } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa6";

const ModalTask = () => {

    const a = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const image = e.target.url.value
        
        await authClient.updateUser({
            image: "https://example.com/image.jpg",
            name: "John Doe",
        })
    }

    return (
        <div>
            <Modal>
      <Button variant="secondary"><BiEdit/>Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="w-[90%] sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <div className="flex flex-col items-center gap-3">
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    <FaRegUser className="size-5" />
                </Modal.Icon>
                <Modal.Heading className="text-xl">Update User</Modal.Heading>
              </div>

            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={a} className="flex flex-col gap-4">

                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="url" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your URL" />
                  </TextField>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        </div>
    );
};

export default ModalTask;